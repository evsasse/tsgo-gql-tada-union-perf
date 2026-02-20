import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1956 } from "./fragment1956";
import type { FragmentToken1957 } from "./fragment1957";

export const FRAGMENT_1958 = gql(`
  fragment Fragment1958 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult1958 = ResultOf<typeof FRAGMENT_1958>;
type FragmentSelf1958 = NonNullable<FragmentResult1958>;

export type FragmentToken1958 =
  | FragmentSelf1958["__typename"]
  | FragmentSelf1958["typenameHint"] | FragmentToken1956 | FragmentToken1957;
