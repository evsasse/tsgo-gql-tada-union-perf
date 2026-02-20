import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2423 } from "./fragment2423";
import type { FragmentToken2424 } from "./fragment2424";

export const FRAGMENT_2425 = gql(`
  fragment Fragment2425 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult2425 = ResultOf<typeof FRAGMENT_2425>;
type FragmentSelf2425 = NonNullable<FragmentResult2425>;

export type FragmentToken2425 =
  | FragmentSelf2425["__typename"]
  | FragmentSelf2425["typenameHint"] | FragmentToken2423 | FragmentToken2424;
