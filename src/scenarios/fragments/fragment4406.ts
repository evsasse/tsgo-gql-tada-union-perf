import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4404 } from "./fragment4404";
import type { FragmentToken4405 } from "./fragment4405";

export const FRAGMENT_4406 = gql(`
  fragment Fragment4406 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult4406 = ResultOf<typeof FRAGMENT_4406>;
type FragmentSelf4406 = NonNullable<FragmentResult4406>;

export type FragmentToken4406 =
  | FragmentSelf4406["__typename"]
  | FragmentSelf4406["typenameHint"] | FragmentToken4404 | FragmentToken4405;
