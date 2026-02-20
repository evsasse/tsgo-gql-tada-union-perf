import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1638 } from "./fragment1638";
import type { FragmentToken1639 } from "./fragment1639";

export const FRAGMENT_1640 = gql(`
  fragment Fragment1640 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult1640 = ResultOf<typeof FRAGMENT_1640>;
type FragmentSelf1640 = NonNullable<FragmentResult1640>;

export type FragmentToken1640 =
  | FragmentSelf1640["__typename"]
  | FragmentSelf1640["typenameHint"] | FragmentToken1638 | FragmentToken1639;
