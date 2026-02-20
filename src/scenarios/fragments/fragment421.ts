import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken419 } from "./fragment419";
import type { FragmentToken420 } from "./fragment420";

export const FRAGMENT_421 = gql(`
  fragment Fragment421 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult421 = ResultOf<typeof FRAGMENT_421>;
type FragmentSelf421 = NonNullable<FragmentResult421>;

export type FragmentToken421 =
  | FragmentSelf421["__typename"]
  | FragmentSelf421["typenameHint"] | FragmentToken419 | FragmentToken420;
