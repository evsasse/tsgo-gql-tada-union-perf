import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2703 } from "./fragment2703";
import type { FragmentToken2704 } from "./fragment2704";

export const FRAGMENT_2705 = gql(`
  fragment Fragment2705 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult2705 = ResultOf<typeof FRAGMENT_2705>;
type FragmentSelf2705 = NonNullable<FragmentResult2705>;

export type FragmentToken2705 =
  | FragmentSelf2705["__typename"]
  | FragmentSelf2705["typenameHint"] | FragmentToken2703 | FragmentToken2704;
