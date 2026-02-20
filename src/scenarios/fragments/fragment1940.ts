import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1938 } from "./fragment1938";
import type { FragmentToken1939 } from "./fragment1939";

export const FRAGMENT_1940 = gql(`
  fragment Fragment1940 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult1940 = ResultOf<typeof FRAGMENT_1940>;
type FragmentSelf1940 = NonNullable<FragmentResult1940>;

export type FragmentToken1940 =
  | FragmentSelf1940["__typename"]
  | FragmentSelf1940["typenameHint"] | FragmentToken1938 | FragmentToken1939;
