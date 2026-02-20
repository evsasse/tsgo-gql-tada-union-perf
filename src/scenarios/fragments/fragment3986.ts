import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3984 } from "./fragment3984";
import type { FragmentToken3985 } from "./fragment3985";

export const FRAGMENT_3986 = gql(`
  fragment Fragment3986 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult3986 = ResultOf<typeof FRAGMENT_3986>;
type FragmentSelf3986 = NonNullable<FragmentResult3986>;

export type FragmentToken3986 =
  | FragmentSelf3986["__typename"]
  | FragmentSelf3986["typenameHint"] | FragmentToken3984 | FragmentToken3985;
