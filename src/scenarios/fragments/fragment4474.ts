import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4472 } from "./fragment4472";
import type { FragmentToken4473 } from "./fragment4473";

export const FRAGMENT_4474 = gql(`
  fragment Fragment4474 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult4474 = ResultOf<typeof FRAGMENT_4474>;
type FragmentSelf4474 = NonNullable<FragmentResult4474>;

export type FragmentToken4474 =
  | FragmentSelf4474["__typename"]
  | FragmentSelf4474["typenameHint"] | FragmentToken4472 | FragmentToken4473;
