import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4454 } from "./fragment4454";
import type { FragmentToken4455 } from "./fragment4455";

export const FRAGMENT_4456 = gql(`
  fragment Fragment4456 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult4456 = ResultOf<typeof FRAGMENT_4456>;
type FragmentSelf4456 = NonNullable<FragmentResult4456>;

export type FragmentToken4456 =
  | FragmentSelf4456["__typename"]
  | FragmentSelf4456["typenameHint"] | FragmentToken4454 | FragmentToken4455;
