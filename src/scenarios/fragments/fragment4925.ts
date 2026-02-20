import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4923 } from "./fragment4923";
import type { FragmentToken4924 } from "./fragment4924";

export const FRAGMENT_4925 = gql(`
  fragment Fragment4925 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult4925 = ResultOf<typeof FRAGMENT_4925>;
type FragmentSelf4925 = NonNullable<FragmentResult4925>;

export type FragmentToken4925 =
  | FragmentSelf4925["__typename"]
  | FragmentSelf4925["typenameHint"] | FragmentToken4923 | FragmentToken4924;
