import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4471 } from "./fragment4471";
import type { FragmentToken4472 } from "./fragment4472";

export const FRAGMENT_4473 = gql(`
  fragment Fragment4473 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult4473 = ResultOf<typeof FRAGMENT_4473>;
type FragmentSelf4473 = NonNullable<FragmentResult4473>;

export type FragmentToken4473 =
  | FragmentSelf4473["__typename"]
  | FragmentSelf4473["typenameHint"] | FragmentToken4471 | FragmentToken4472;
