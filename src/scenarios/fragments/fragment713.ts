import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken711 } from "./fragment711";
import type { FragmentToken712 } from "./fragment712";

export const FRAGMENT_713 = gql(`
  fragment Fragment713 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult713 = ResultOf<typeof FRAGMENT_713>;
type FragmentSelf713 = NonNullable<FragmentResult713>;

export type FragmentToken713 =
  | FragmentSelf713["__typename"]
  | FragmentSelf713["typenameHint"] | FragmentToken711 | FragmentToken712;
