import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1206 } from "./fragment1206";
import type { FragmentToken1207 } from "./fragment1207";

export const FRAGMENT_1208 = gql(`
  fragment Fragment1208 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult1208 = ResultOf<typeof FRAGMENT_1208>;
type FragmentSelf1208 = NonNullable<FragmentResult1208>;

export type FragmentToken1208 =
  | FragmentSelf1208["__typename"]
  | FragmentSelf1208["typenameHint"] | FragmentToken1206 | FragmentToken1207;
