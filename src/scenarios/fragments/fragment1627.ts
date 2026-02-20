import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1625 } from "./fragment1625";
import type { FragmentToken1626 } from "./fragment1626";

export const FRAGMENT_1627 = gql(`
  fragment Fragment1627 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult1627 = ResultOf<typeof FRAGMENT_1627>;
type FragmentSelf1627 = NonNullable<FragmentResult1627>;

export type FragmentToken1627 =
  | FragmentSelf1627["__typename"]
  | FragmentSelf1627["typenameHint"] | FragmentToken1625 | FragmentToken1626;
