import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken162 } from "./fragment162";
import type { FragmentToken163 } from "./fragment163";

export const FRAGMENT_164 = gql(`
  fragment Fragment164 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult164 = ResultOf<typeof FRAGMENT_164>;
type FragmentSelf164 = NonNullable<FragmentResult164>;

export type FragmentToken164 =
  | FragmentSelf164["__typename"]
  | FragmentSelf164["typenameHint"] | FragmentToken162 | FragmentToken163;
