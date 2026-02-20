import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2126 } from "./fragment2126";
import type { FragmentToken2127 } from "./fragment2127";

export const FRAGMENT_2128 = gql(`
  fragment Fragment2128 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult2128 = ResultOf<typeof FRAGMENT_2128>;
type FragmentSelf2128 = NonNullable<FragmentResult2128>;

export type FragmentToken2128 =
  | FragmentSelf2128["__typename"]
  | FragmentSelf2128["typenameHint"] | FragmentToken2126 | FragmentToken2127;
