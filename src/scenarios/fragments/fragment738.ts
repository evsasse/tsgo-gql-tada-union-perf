import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken736 } from "./fragment736";
import type { FragmentToken737 } from "./fragment737";

export const FRAGMENT_738 = gql(`
  fragment Fragment738 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult738 = ResultOf<typeof FRAGMENT_738>;
type FragmentSelf738 = NonNullable<FragmentResult738>;

export type FragmentToken738 =
  | FragmentSelf738["__typename"]
  | FragmentSelf738["typenameHint"] | FragmentToken736 | FragmentToken737;
