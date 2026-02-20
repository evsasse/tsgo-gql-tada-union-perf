import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4470 } from "./fragment4470";
import type { FragmentToken4471 } from "./fragment4471";

export const FRAGMENT_4472 = gql(`
  fragment Fragment4472 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult4472 = ResultOf<typeof FRAGMENT_4472>;
type FragmentSelf4472 = NonNullable<FragmentResult4472>;

export type FragmentToken4472 =
  | FragmentSelf4472["__typename"]
  | FragmentSelf4472["typenameHint"] | FragmentToken4470 | FragmentToken4471;
