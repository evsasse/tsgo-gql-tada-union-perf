import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2067 } from "./fragment2067";
import type { FragmentToken2068 } from "./fragment2068";

export const FRAGMENT_2069 = gql(`
  fragment Fragment2069 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult2069 = ResultOf<typeof FRAGMENT_2069>;
type FragmentSelf2069 = NonNullable<FragmentResult2069>;

export type FragmentToken2069 =
  | FragmentSelf2069["__typename"]
  | FragmentSelf2069["typenameHint"] | FragmentToken2067 | FragmentToken2068;
