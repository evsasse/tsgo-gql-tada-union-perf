import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken146 } from "./fragment146";
import type { FragmentToken147 } from "./fragment147";

export const FRAGMENT_148 = gql(`
  fragment Fragment148 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult148 = ResultOf<typeof FRAGMENT_148>;
type FragmentSelf148 = NonNullable<FragmentResult148>;

export type FragmentToken148 =
  | FragmentSelf148["__typename"]
  | FragmentSelf148["typenameHint"] | FragmentToken146 | FragmentToken147;
