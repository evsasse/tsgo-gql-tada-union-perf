import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4385 } from "./fragment4385";
import type { FragmentToken4386 } from "./fragment4386";

export const FRAGMENT_4387 = gql(`
  fragment Fragment4387 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult4387 = ResultOf<typeof FRAGMENT_4387>;
type FragmentSelf4387 = NonNullable<FragmentResult4387>;

export type FragmentToken4387 =
  | FragmentSelf4387["__typename"]
  | FragmentSelf4387["typenameHint"] | FragmentToken4385 | FragmentToken4386;
