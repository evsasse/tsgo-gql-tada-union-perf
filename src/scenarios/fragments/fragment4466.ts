import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4464 } from "./fragment4464";
import type { FragmentToken4465 } from "./fragment4465";

export const FRAGMENT_4466 = gql(`
  fragment Fragment4466 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult4466 = ResultOf<typeof FRAGMENT_4466>;
type FragmentSelf4466 = NonNullable<FragmentResult4466>;

export type FragmentToken4466 =
  | FragmentSelf4466["__typename"]
  | FragmentSelf4466["typenameHint"] | FragmentToken4464 | FragmentToken4465;
