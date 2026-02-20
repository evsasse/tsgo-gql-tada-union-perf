import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken671 } from "./fragment671";
import type { FragmentToken672 } from "./fragment672";

export const FRAGMENT_673 = gql(`
  fragment Fragment673 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult673 = ResultOf<typeof FRAGMENT_673>;
type FragmentSelf673 = NonNullable<FragmentResult673>;

export type FragmentToken673 =
  | FragmentSelf673["__typename"]
  | FragmentSelf673["typenameHint"] | FragmentToken671 | FragmentToken672;
