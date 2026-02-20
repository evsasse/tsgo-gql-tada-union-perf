import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1892 } from "./fragment1892";
import type { FragmentToken1893 } from "./fragment1893";

export const FRAGMENT_1894 = gql(`
  fragment Fragment1894 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult1894 = ResultOf<typeof FRAGMENT_1894>;
type FragmentSelf1894 = NonNullable<FragmentResult1894>;

export type FragmentToken1894 =
  | FragmentSelf1894["__typename"]
  | FragmentSelf1894["typenameHint"] | FragmentToken1892 | FragmentToken1893;
