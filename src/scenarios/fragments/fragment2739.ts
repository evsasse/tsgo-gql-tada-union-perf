import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2737 } from "./fragment2737";
import type { FragmentToken2738 } from "./fragment2738";

export const FRAGMENT_2739 = gql(`
  fragment Fragment2739 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult2739 = ResultOf<typeof FRAGMENT_2739>;
type FragmentSelf2739 = NonNullable<FragmentResult2739>;

export type FragmentToken2739 =
  | FragmentSelf2739["__typename"]
  | FragmentSelf2739["typenameHint"] | FragmentToken2737 | FragmentToken2738;
