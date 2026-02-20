import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken850 } from "./fragment850";
import type { FragmentToken851 } from "./fragment851";

export const FRAGMENT_852 = gql(`
  fragment Fragment852 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult852 = ResultOf<typeof FRAGMENT_852>;
type FragmentSelf852 = NonNullable<FragmentResult852>;

export type FragmentToken852 =
  | FragmentSelf852["__typename"]
  | FragmentSelf852["typenameHint"] | FragmentToken850 | FragmentToken851;
