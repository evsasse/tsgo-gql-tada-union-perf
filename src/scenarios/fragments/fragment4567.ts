import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4565 } from "./fragment4565";
import type { FragmentToken4566 } from "./fragment4566";

export const FRAGMENT_4567 = gql(`
  fragment Fragment4567 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult4567 = ResultOf<typeof FRAGMENT_4567>;
type FragmentSelf4567 = NonNullable<FragmentResult4567>;

export type FragmentToken4567 =
  | FragmentSelf4567["__typename"]
  | FragmentSelf4567["typenameHint"] | FragmentToken4565 | FragmentToken4566;
