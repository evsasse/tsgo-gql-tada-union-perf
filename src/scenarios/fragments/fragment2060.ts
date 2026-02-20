import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2058 } from "./fragment2058";
import type { FragmentToken2059 } from "./fragment2059";

export const FRAGMENT_2060 = gql(`
  fragment Fragment2060 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult2060 = ResultOf<typeof FRAGMENT_2060>;
type FragmentSelf2060 = NonNullable<FragmentResult2060>;

export type FragmentToken2060 =
  | FragmentSelf2060["__typename"]
  | FragmentSelf2060["typenameHint"] | FragmentToken2058 | FragmentToken2059;
