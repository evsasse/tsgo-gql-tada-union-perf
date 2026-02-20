import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken770 } from "./fragment770";
import type { FragmentToken771 } from "./fragment771";

export const FRAGMENT_772 = gql(`
  fragment Fragment772 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult772 = ResultOf<typeof FRAGMENT_772>;
type FragmentSelf772 = NonNullable<FragmentResult772>;

export type FragmentToken772 =
  | FragmentSelf772["__typename"]
  | FragmentSelf772["typenameHint"] | FragmentToken770 | FragmentToken771;
