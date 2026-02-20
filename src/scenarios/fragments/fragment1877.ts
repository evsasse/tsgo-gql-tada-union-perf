import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1875 } from "./fragment1875";
import type { FragmentToken1876 } from "./fragment1876";

export const FRAGMENT_1877 = gql(`
  fragment Fragment1877 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult1877 = ResultOf<typeof FRAGMENT_1877>;
type FragmentSelf1877 = NonNullable<FragmentResult1877>;

export type FragmentToken1877 =
  | FragmentSelf1877["__typename"]
  | FragmentSelf1877["typenameHint"] | FragmentToken1875 | FragmentToken1876;
