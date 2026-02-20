import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1691 } from "./fragment1691";
import type { FragmentToken1692 } from "./fragment1692";

export const FRAGMENT_1693 = gql(`
  fragment Fragment1693 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult1693 = ResultOf<typeof FRAGMENT_1693>;
type FragmentSelf1693 = NonNullable<FragmentResult1693>;

export type FragmentToken1693 =
  | FragmentSelf1693["__typename"]
  | FragmentSelf1693["typenameHint"] | FragmentToken1691 | FragmentToken1692;
