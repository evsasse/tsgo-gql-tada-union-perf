import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken232 } from "./fragment232";
import type { FragmentToken233 } from "./fragment233";

export const FRAGMENT_234 = gql(`
  fragment Fragment234 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult234 = ResultOf<typeof FRAGMENT_234>;
type FragmentSelf234 = NonNullable<FragmentResult234>;

export type FragmentToken234 =
  | FragmentSelf234["__typename"]
  | FragmentSelf234["typenameHint"] | FragmentToken232 | FragmentToken233;
