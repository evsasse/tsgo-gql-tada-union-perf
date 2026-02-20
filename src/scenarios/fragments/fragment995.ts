import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken993 } from "./fragment993";
import type { FragmentToken994 } from "./fragment994";

export const FRAGMENT_995 = gql(`
  fragment Fragment995 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult995 = ResultOf<typeof FRAGMENT_995>;
type FragmentSelf995 = NonNullable<FragmentResult995>;

export type FragmentToken995 =
  | FragmentSelf995["__typename"]
  | FragmentSelf995["typenameHint"] | FragmentToken993 | FragmentToken994;
