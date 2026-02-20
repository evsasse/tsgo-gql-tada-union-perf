import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2031 } from "./fragment2031";
import type { FragmentToken2032 } from "./fragment2032";

export const FRAGMENT_2033 = gql(`
  fragment Fragment2033 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult2033 = ResultOf<typeof FRAGMENT_2033>;
type FragmentSelf2033 = NonNullable<FragmentResult2033>;

export type FragmentToken2033 =
  | FragmentSelf2033["__typename"]
  | FragmentSelf2033["typenameHint"] | FragmentToken2031 | FragmentToken2032;
