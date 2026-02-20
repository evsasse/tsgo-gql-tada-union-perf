import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4747 } from "./fragment4747";
import type { FragmentToken4748 } from "./fragment4748";

export const FRAGMENT_4749 = gql(`
  fragment Fragment4749 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult4749 = ResultOf<typeof FRAGMENT_4749>;
type FragmentSelf4749 = NonNullable<FragmentResult4749>;

export type FragmentToken4749 =
  | FragmentSelf4749["__typename"]
  | FragmentSelf4749["typenameHint"] | FragmentToken4747 | FragmentToken4748;
