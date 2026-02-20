import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken664 } from "./fragment664";
import type { FragmentToken665 } from "./fragment665";

export const FRAGMENT_666 = gql(`
  fragment Fragment666 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult666 = ResultOf<typeof FRAGMENT_666>;
type FragmentSelf666 = NonNullable<FragmentResult666>;

export type FragmentToken666 =
  | FragmentSelf666["__typename"]
  | FragmentSelf666["typenameHint"] | FragmentToken664 | FragmentToken665;
