import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2057 } from "./fragment2057";
import type { FragmentToken2058 } from "./fragment2058";

export const FRAGMENT_2059 = gql(`
  fragment Fragment2059 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult2059 = ResultOf<typeof FRAGMENT_2059>;
type FragmentSelf2059 = NonNullable<FragmentResult2059>;

export type FragmentToken2059 =
  | FragmentSelf2059["__typename"]
  | FragmentSelf2059["typenameHint"] | FragmentToken2057 | FragmentToken2058;
