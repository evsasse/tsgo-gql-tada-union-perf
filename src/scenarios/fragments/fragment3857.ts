import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3855 } from "./fragment3855";
import type { FragmentToken3856 } from "./fragment3856";

export const FRAGMENT_3857 = gql(`
  fragment Fragment3857 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult3857 = ResultOf<typeof FRAGMENT_3857>;
type FragmentSelf3857 = NonNullable<FragmentResult3857>;

export type FragmentToken3857 =
  | FragmentSelf3857["__typename"]
  | FragmentSelf3857["typenameHint"] | FragmentToken3855 | FragmentToken3856;
