import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1954 } from "./fragment1954";
import type { FragmentToken1955 } from "./fragment1955";

export const FRAGMENT_1956 = gql(`
  fragment Fragment1956 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult1956 = ResultOf<typeof FRAGMENT_1956>;
type FragmentSelf1956 = NonNullable<FragmentResult1956>;

export type FragmentToken1956 =
  | FragmentSelf1956["__typename"]
  | FragmentSelf1956["typenameHint"] | FragmentToken1954 | FragmentToken1955;
