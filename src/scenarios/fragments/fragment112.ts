import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken110 } from "./fragment110";
import type { FragmentToken111 } from "./fragment111";

export const FRAGMENT_112 = gql(`
  fragment Fragment112 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult112 = ResultOf<typeof FRAGMENT_112>;
type FragmentSelf112 = NonNullable<FragmentResult112>;

export type FragmentToken112 =
  | FragmentSelf112["__typename"]
  | FragmentSelf112["typenameHint"] | FragmentToken110 | FragmentToken111;
