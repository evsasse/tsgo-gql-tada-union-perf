import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4403 } from "./fragment4403";
import type { FragmentToken4404 } from "./fragment4404";

export const FRAGMENT_4405 = gql(`
  fragment Fragment4405 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult4405 = ResultOf<typeof FRAGMENT_4405>;
type FragmentSelf4405 = NonNullable<FragmentResult4405>;

export type FragmentToken4405 =
  | FragmentSelf4405["__typename"]
  | FragmentSelf4405["typenameHint"] | FragmentToken4403 | FragmentToken4404;
