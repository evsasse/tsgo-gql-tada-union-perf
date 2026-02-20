import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken742 } from "./fragment742";
import type { FragmentToken743 } from "./fragment743";

export const FRAGMENT_744 = gql(`
  fragment Fragment744 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult744 = ResultOf<typeof FRAGMENT_744>;
type FragmentSelf744 = NonNullable<FragmentResult744>;

export type FragmentToken744 =
  | FragmentSelf744["__typename"]
  | FragmentSelf744["typenameHint"] | FragmentToken742 | FragmentToken743;
