import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2722 } from "./fragment2722";
import type { FragmentToken2723 } from "./fragment2723";

export const FRAGMENT_2724 = gql(`
  fragment Fragment2724 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult2724 = ResultOf<typeof FRAGMENT_2724>;
type FragmentSelf2724 = NonNullable<FragmentResult2724>;

export type FragmentToken2724 =
  | FragmentSelf2724["__typename"]
  | FragmentSelf2724["typenameHint"] | FragmentToken2722 | FragmentToken2723;
