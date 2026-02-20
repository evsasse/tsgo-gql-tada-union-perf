import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1256 } from "./fragment1256";
import type { FragmentToken1257 } from "./fragment1257";

export const FRAGMENT_1258 = gql(`
  fragment Fragment1258 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult1258 = ResultOf<typeof FRAGMENT_1258>;
type FragmentSelf1258 = NonNullable<FragmentResult1258>;

export type FragmentToken1258 =
  | FragmentSelf1258["__typename"]
  | FragmentSelf1258["typenameHint"] | FragmentToken1256 | FragmentToken1257;
