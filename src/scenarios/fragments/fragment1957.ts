import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1955 } from "./fragment1955";
import type { FragmentToken1956 } from "./fragment1956";

export const FRAGMENT_1957 = gql(`
  fragment Fragment1957 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult1957 = ResultOf<typeof FRAGMENT_1957>;
type FragmentSelf1957 = NonNullable<FragmentResult1957>;

export type FragmentToken1957 =
  | FragmentSelf1957["__typename"]
  | FragmentSelf1957["typenameHint"] | FragmentToken1955 | FragmentToken1956;
