import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4223 } from "./fragment4223";
import type { FragmentToken4224 } from "./fragment4224";

export const FRAGMENT_4225 = gql(`
  fragment Fragment4225 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult4225 = ResultOf<typeof FRAGMENT_4225>;
type FragmentSelf4225 = NonNullable<FragmentResult4225>;

export type FragmentToken4225 =
  | FragmentSelf4225["__typename"]
  | FragmentSelf4225["typenameHint"] | FragmentToken4223 | FragmentToken4224;
