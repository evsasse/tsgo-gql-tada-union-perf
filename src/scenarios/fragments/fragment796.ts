import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken794 } from "./fragment794";
import type { FragmentToken795 } from "./fragment795";

export const FRAGMENT_796 = gql(`
  fragment Fragment796 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult796 = ResultOf<typeof FRAGMENT_796>;
type FragmentSelf796 = NonNullable<FragmentResult796>;

export type FragmentToken796 =
  | FragmentSelf796["__typename"]
  | FragmentSelf796["typenameHint"] | FragmentToken794 | FragmentToken795;
