import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken613 } from "./fragment613";
import type { FragmentToken614 } from "./fragment614";

export const FRAGMENT_615 = gql(`
  fragment Fragment615 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult615 = ResultOf<typeof FRAGMENT_615>;
type FragmentSelf615 = NonNullable<FragmentResult615>;

export type FragmentToken615 =
  | FragmentSelf615["__typename"]
  | FragmentSelf615["typenameHint"] | FragmentToken613 | FragmentToken614;
