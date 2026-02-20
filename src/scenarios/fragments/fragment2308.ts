import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2306 } from "./fragment2306";
import type { FragmentToken2307 } from "./fragment2307";

export const FRAGMENT_2308 = gql(`
  fragment Fragment2308 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult2308 = ResultOf<typeof FRAGMENT_2308>;
type FragmentSelf2308 = NonNullable<FragmentResult2308>;

export type FragmentToken2308 =
  | FragmentSelf2308["__typename"]
  | FragmentSelf2308["typenameHint"] | FragmentToken2306 | FragmentToken2307;
