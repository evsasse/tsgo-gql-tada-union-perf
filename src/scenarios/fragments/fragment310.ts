import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken308 } from "./fragment308";
import type { FragmentToken309 } from "./fragment309";

export const FRAGMENT_310 = gql(`
  fragment Fragment310 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult310 = ResultOf<typeof FRAGMENT_310>;
type FragmentSelf310 = NonNullable<FragmentResult310>;

export type FragmentToken310 =
  | FragmentSelf310["__typename"]
  | FragmentSelf310["typenameHint"] | FragmentToken308 | FragmentToken309;
