import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2702 } from "./fragment2702";
import type { FragmentToken2703 } from "./fragment2703";

export const FRAGMENT_2704 = gql(`
  fragment Fragment2704 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult2704 = ResultOf<typeof FRAGMENT_2704>;
type FragmentSelf2704 = NonNullable<FragmentResult2704>;

export type FragmentToken2704 =
  | FragmentSelf2704["__typename"]
  | FragmentSelf2704["typenameHint"] | FragmentToken2702 | FragmentToken2703;
