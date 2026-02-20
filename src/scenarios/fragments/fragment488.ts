import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken486 } from "./fragment486";
import type { FragmentToken487 } from "./fragment487";

export const FRAGMENT_488 = gql(`
  fragment Fragment488 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult488 = ResultOf<typeof FRAGMENT_488>;
type FragmentSelf488 = NonNullable<FragmentResult488>;

export type FragmentToken488 =
  | FragmentSelf488["__typename"]
  | FragmentSelf488["typenameHint"] | FragmentToken486 | FragmentToken487;
