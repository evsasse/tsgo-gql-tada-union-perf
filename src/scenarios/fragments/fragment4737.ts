import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4735 } from "./fragment4735";
import type { FragmentToken4736 } from "./fragment4736";

export const FRAGMENT_4737 = gql(`
  fragment Fragment4737 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult4737 = ResultOf<typeof FRAGMENT_4737>;
type FragmentSelf4737 = NonNullable<FragmentResult4737>;

export type FragmentToken4737 =
  | FragmentSelf4737["__typename"]
  | FragmentSelf4737["typenameHint"] | FragmentToken4735 | FragmentToken4736;
